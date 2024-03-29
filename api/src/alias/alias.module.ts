import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { RangeModule } from 'src/range/range.module';
import { Alias, AliasSchema } from './alias.model';
import { AliasService } from './alias.service';
import { AliasController } from './alias.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Alias.name, schema: AliasSchema }]),
        RangeModule,
    ],
    providers: [AliasService],
    controllers: [AliasController]
})
export class AliasModule {}
