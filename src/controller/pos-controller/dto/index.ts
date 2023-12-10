import {
	Min,
	IsNumber,
	IsString,
	MaxLength,
	IsOptional
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class SearchDto {
	@ApiPropertyOptional({ default: 'Search' })
	@IsOptional()
	@IsString({ message: 'Pencarian harus berupa string' })
	@MaxLength(255, { message: 'Pencarian tidak boleh melebihi $constraint1 karakter' })
	@Transform(({ value }) => value.toLowerCase())
	search: string;
}

export class PaginationDto {
   @ApiPropertyOptional({ default: 1 })
   @IsOptional()
   @IsNumber({}, { message: 'Halaman harus berupa angka' })
   @Min(1, { message: 'Halaman tidak boleh kurang dari $constraint1' })
   @Type(() => Number)
   page: number;

   @ApiPropertyOptional({ default: 5 })
   @IsOptional()
   @IsNumber({}, { message: 'Batas data harus berupa angka' })
   @Min(1, { message: 'Batas data tidak boleh kurang dari $constraint1' })
   @Type(() => Number)
   limit: number;
}