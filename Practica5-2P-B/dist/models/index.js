"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deportista = exports.TipoDeEjercicio = exports.EjercicioRealizado = exports.sequelize = void 0;
// models/index.ts
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const EjercicioRealizado_1 = __importDefault(require("./EjercicioRealizado"));
exports.EjercicioRealizado = EjercicioRealizado_1.default;
const TipoDeEjercicio_1 = __importDefault(require("./TipoDeEjercicio"));
exports.TipoDeEjercicio = TipoDeEjercicio_1.default;
const Deportista_1 = __importDefault(require("./Deportista"));
exports.Deportista = Deportista_1.default;
// Definir relaciones
EjercicioRealizado_1.default.belongsTo(TipoDeEjercicio_1.default, { foreignKey: 'Idtipoejercicio' });
EjercicioRealizado_1.default.belongsTo(Deportista_1.default, { foreignKey: 'Iddeportista' });
TipoDeEjercicio_1.default.hasMany(EjercicioRealizado_1.default, { foreignKey: 'Idtipoejercicio' });
Deportista_1.default.hasMany(EjercicioRealizado_1.default, { foreignKey: 'Iddeportista' });
