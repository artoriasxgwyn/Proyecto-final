import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Administrador Escolar',
      version: '1.0.0',
      description: 'API for managing all of the schools',
      contact: {
        name: 'Letrina'
      }
    },
    components: {
      securitySchemes: {
        XTokenAuth: {
          type: "apiKey",//tipo de seguridad: API Key
          in: "header",//de donde viene
          name: "x-token",//nombre header
          description: "Token JWT para autenticación"
        }
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server'
      }
    ]
  },
  apis: ['./routes/*.js']//archivos donde Swagger JSDoc
};

const specs = swaggerJsdoc(options);
export default specs;
