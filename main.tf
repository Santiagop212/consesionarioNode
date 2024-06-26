
terraform {
  required_version = ">= 0.14"

  required_providers {
    # Cloud Run support was added on 3.3.0
    google = ">= 3.3"
  }
}

provider "google" {
 
  project = "carros-419303"
}

resource "google_project_service" "run_api" {
  service = "run.googleapis.com"

  disable_on_destroy = true
}

resource "google_cloud_run_service" "run_service" {
  name = "newcarros"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/carros-419303/autosudem@sha256:7a4141b66d36cd3d3ccbd3c546ae1d2180de4fc394dc98734e760457b11809b6"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  # Waits for the Cloud Run API to be enabled
  depends_on = [google_project_service.run_api]
}
resource "google_cloud_run_service_iam_member" "run_all_users" {
  service  = google_cloud_run_service.run_service.name
  location = google_cloud_run_service.run_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
output "service_url" {
  value = google_cloud_run_service.run_service.status[0].url
}