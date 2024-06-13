// models/index.ts
import sequelize from '../config/database';
import EjercicioRealizado from './EjercicioRealizado';
import TipoDeEjercicio from './TipoDeEjercicio';
import Deportista from './Deportista';

// Definir relaciones
EjercicioRealizado.belongsTo(TipoDeEjercicio, { foreignKey: 'Idtipoejercicio' });
EjercicioRealizado.belongsTo(Deportista, { foreignKey: 'Iddeportista' });

TipoDeEjercicio.hasMany(EjercicioRealizado, { foreignKey: 'Idtipoejercicio' });
Deportista.hasMany(EjercicioRealizado, { foreignKey: 'Iddeportista' });

export { sequelize, EjercicioRealizado, TipoDeEjercicio, Deportista };
