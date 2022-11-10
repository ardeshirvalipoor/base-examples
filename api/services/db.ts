import configs from '../configs'
import { base } from '../express-typescript-base'

export default base.services.mongodb(configs.db.MONGODB_URI, configs.db.DB_NAME)