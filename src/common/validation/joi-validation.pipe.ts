import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, _metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value, { abortEarly: false });
    if (error)
      throw new UnprocessableEntityException(
        error.details.map((detail) => detail.message),
      );
    return value;
  }
}
