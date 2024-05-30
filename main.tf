# Configuración de Terraform
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.63.0"
    }
  }
}

# Configuración de la región de AWS
provider "aws" {
  region = "us-west-2"
}

# Crear un bucket de S3 para almacenar el código
resource "aws_s3_bucket" "code_bucket" {
  bucket = "my-code-bucket"
  acl    = "private"
}

# Crear un repositorio de GitHub para almacenar el código
resource "github_repository" "my_repo" {
  name        = "my-repo"
  description = "Mi repositorio de GitHub"
}

# Crear un pipeline de GitHub Actions para desplegar el AP
resource "github_actions_workflow" "deploy_ap" {
  repository = github_repository.my_repo.name
  workflow_file = file("github/workflows/deploy-ap.yml")
}