import { IsNotEmpty, IsNumber } from "class-validator";

export class FindPolylineByStandDto {
    @IsNotEmpty()
    @IsNumber()
    lat: number;

    @IsNotEmpty()
    @IsNumber()
    lng: number;
}