import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { SellersModule } from './sellers/sellers.module';
import { StockModule } from './stock/stock.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitysModule } from './citys/citys.module';
import { StatusOrderModule } from './status_order/status_order.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    UsersModule, 
    CategoryModule, 
    ProductModule, 
    OrderModule, 
    SellersModule, 
    StockModule, 
    AuthModule,
    //Для работы с env файлами
    ConfigModule.forRoot({isGlobal:true}),
    //Подключение к базе данных
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService) => ({
        type:'postgres',
        //Подключаем .env файл
        host:configService.get('DB_HOST'),
        port:configService.get('DB_PORT'),
        username:configService.get('DB_USERNAME'),
        password:configService.get('DB_PASSWORD'),
        database:configService.get('DB_NAME'),
        synchronize:true,
        //__dirname - отслеживать текущую папку, /**/*.entity{.js,.ts} - следить за всеми
        //файлами в названии которых есть .entity
        entities:[__dirname+'/**/*.entity{.js,.ts}'],
      }),
      inject:[ConfigService]
    }),
    CitysModule,
    StatusOrderModule,
    ReviewsModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
