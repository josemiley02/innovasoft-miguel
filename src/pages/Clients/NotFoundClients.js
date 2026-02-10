import { Box, Typography, Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 200px)',
    padding: theme.spacing(3),
  },
  card: {
    textAlign: 'center',
    padding: theme.spacing(6),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    maxWidth: '600px',
  },
  errorCode: {
    fontSize: '8rem',
    fontWeight: 700,
    color: '#FF9900',
    margin: 0,
    lineHeight: 1,
    marginBottom: theme.spacing(2),
  },
  errorTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: theme.spacing(2),
  },
  errorMessage: {
    fontSize: '1.1rem',
    color: '#555555',
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
  },
  buttonGroup: {
    display: 'flex',
    gap: theme.spacing(2),
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  backButton: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  homeButton: {
    backgroundColor: '#FF9900',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#E68900',
    },
  },
}));

function NotFoundClients() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Layout>
      <Box className={classes.container}>
        <Card className={classes.card}>
          <Typography className={classes.errorCode}>404</Typography>
          <Typography className={classes.errorTitle}>Clientes No Encontrados</Typography>
          <Typography className={classes.errorMessage}>
            No se encontraron clientes con los criterios de búsqueda especificados. 
            Intenta con otros parámetros de búsqueda o crea un nuevo cliente.
          </Typography>
          <Box className={classes.buttonGroup}>
            <Button
              variant="contained"
              className={classes.homeButton}
              onClick={() => history.push('/clientes')}
            >
              Limpiar Búsqueda
            </Button>
            <Button
              variant="contained"
              className={classes.backButton}
              onClick={() => history.push('/home')}
            >
              Ir al Inicio
            </Button>
          </Box>
        </Card>
      </Box>
    </Layout>
  );
}

export default NotFoundClients;
