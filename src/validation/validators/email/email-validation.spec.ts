import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from '@/validation/validators/email/email-validation'

describe('EmailValidation', () => {
  const makeSut = (): EmailValidation => {
    return new EmailValidation(faker.database.column())
  }
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.words())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
