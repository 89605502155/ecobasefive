"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = require("helmet");
const app_module_1 = require("./app.module");
const compression = require("compression");
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port');
    app.enableCors();
    app.setGlobalPrefix('/api');
    app.use(cookieParser());
    app.use((0, helmet_1.default)());
    app.use(compression());
    app.useGlobalPipes(new common_1.ValidationPipe({
        disableErrorMessages: false,
        whitelist: true,
        transform: true,
    }));
    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map