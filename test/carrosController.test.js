// Importing the boom module for handling HTTP errors
const boom = require('boom')
// Importing the carrosController module which contains functions to handle operations
const carrosController = require('../controllers/carrosController')
const Carros = require('../models/Carros')

// Test suite for carrosController
describe('carrosController', () => {
    // Test suite for the getStudents function
    describe('getStudents', () => {
        // Test case: should return all students
        it('should return all students', async () => {
            // Mocking request and reply objects
            const req = {}
            const reply = {}
            // Expected list of students
            const expectedStudents = [{ name: 'John' }, { name: 'Jane' }]
            // Mocking the Carros.find method to return expectedStudents
            Carros.find = jest.fn().mockResolvedValue(expectedStudents)

            // Calling the getStudents function and storing the result
            const result = await carrosController.getStudents(req, reply)

            // Expecting the result to be equal to expectedStudents
            expect(result).toEqual(expectedStudents)
            // Expecting Carros.find to be called once
            expect(Carros.find).toHaveBeenCalledTimes(1)
        })
    })

    // Test suite for the getSingleStudent function
    describe('getSingleStudent', () => {
        // Test case: should return a single student by ID
        it('should return a single student by ID', async () => {
            // Mocking request object with student ID
            const req = { params: { id: '123' } }
            const reply = {}
            // Expected student object
            const expectedStudent = { name: 'John' }
            // Mocking the Carros.findById method to return expectedStudent
            Carros.findById = jest.fn().mockResolvedValue(expectedStudent)

            // Calling the getSingleStudent function and storing the result
            const result = await carrosController.getSingleStudent(req, reply)

            // Expecting the result to be equal to expectedStudent
            expect(result).toEqual(expectedStudent)
            // Expecting Carros.findById to be called once
            expect(Carros.findById).toHaveBeenCalledTimes(1)
            // Expecting Carros.findById to be called with '123'
            expect(Carros.findById).toHaveBeenCalledWith('123')
        })
    })

    /*
    // Test suite for the addStudent function
    describe('addStudent', () => {
        // Test case: should add a new student
        it('should add a new student', async () => {
            // Mocking request and reply objects
            const req = {}
            const reply = {}
            // New student object
            const newStudent = { name: 'John' }
            // Mocking the Carros.create method to return newStudent
            Carros.create = jest.fn().mockResolvedValue(newStudent)

            // Calling the addStudent function and storing the result
            const result = await carrosController.addStudent(req, reply)

            // Expecting the result to be equal to newStudent
            expect(result).toEqual(newStudent)
            // Expecting Carros.create to be called once
            expect(Carros.create).toHaveBeenCalledTimes(1)
            // Expecting Carros.create to be called with req.body
            expect(Carros.create).toHaveBeenCalledWith(req.body)
        })
    })
    */

    // Test suite for the updateStudent function
    describe('updateStudent', () => {
        // Test case: should update an existing student
        it('should update an existing student', async () => {
            // Mocking request object with student ID and updated data
            const req = { params: { id: '123' }, body: { name: 'John' } }
            const reply = {}
            // Updated student object
            const updatedStudent = { name: 'John', age: 25 }
            // Mocking the Carros.findByIdAndUpdate method to return updatedStudent
            Carros.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedStudent)

            // Calling the updateStudent function and storing the result
            const result = await carrosController.updateStudent(req, reply)

            // Expecting the result to be equal to updatedStudent
            expect(result).toEqual(updatedStudent)
            // Expecting Carros.findByIdAndUpdate to be called once
            expect(Carros.findByIdAndUpdate).toHaveBeenCalledTimes(1)
            // Expecting Carros.findByIdAndUpdate to be called with '123', req.body, and { new: true }
            expect(Carros.findByIdAndUpdate).toHaveBeenCalledWith('123', req.body, { new: true })
        })
    })

    // Test suite for the deleteStudent function
    describe('deleteStudent', () => {
        // Test case: should delete a student
        it('should delete a student', async () => {
            // Mocking request object with student ID
            const req = { params: { id: '123' } }
            const reply = {}
            // Deleted student object
            const deletedStudent = { name: 'John' }
            // Mocking the Carros.findByIdAndDelete method to return deletedStudent
            Carros.findByIdAndDelete = jest.fn().mockResolvedValue(deletedStudent)

            // Calling the deleteStudent function and storing the result
            const result = await carrosController.deleteStudent(req, reply)

            // Expecting the result to be equal to deletedStudent
            expect(result).toEqual(deletedStudent)
            // Expecting Carros.findByIdAndDelete to be called once
            expect(Carros.findByIdAndDelete).toHaveBeenCalledTimes(1)
            // Expecting Carros.findByIdAndDelete to be called with '123'
            expect(Carros.findByIdAndDelete).toHaveBeenCalledWith('123')
        })

        // Test case: should throw an error if deletion fails
        it('should throw an error if deletion fails', async () => {
            // Mocking request object with student ID
            const req = { params: { id: '123' } }
            const reply = {}
            // Error object for deletion failure
            const error = new Error('Deletion failed')
            // Mocking the Carros.findByIdAndDelete method to reject with error
            Carros.findByIdAndDelete = jest.fn().mockRejectedValue(error)

            // Expecting a rejection with boom.Boom when deleteStudent is called
            await expect(carrosController.deleteStudent(req, reply)).rejects.toThrow(boom.Boom)

            // Expecting Carros.findByIdAndDelete to be called once
            expect(Carros.findByIdAndDelete).toHaveBeenCalledTimes(1)
            // Expecting Carros.findByIdAndDelete to be called with '123'
            expect(Carros.findByIdAndDelete).toHaveBeenCalledWith('123')
        })
    })
})
