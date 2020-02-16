import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import lusca from 'lusca';
import swaggerUi from 'swagger-ui-express';

// Controllers (route handlers)
import { openApiDocumentation } from './openApiDocumentation';

// Create Express server
export const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

/**
 * API examples routes.
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
