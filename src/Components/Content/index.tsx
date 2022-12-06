import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../topBar';
import styles from './content.module.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Input } from '../Input';
import { MdEmail, MdLock } from 'react-icons/md'
import { ButtonUsed } from '../Button/index';

import { useForm } from "react-hook-form";
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Content = () => {
  
  const { control, handleSubmit, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });
  return(
    <>
      <ResponsiveAppBar/>
      <div className={styles.content} style={{paddingTop:'69px'}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} style={{marginLeft:'80px', marginTop:'100px'}}>
              <h1 style={{fontSize:'50px', fontFamily:'Sans-serif'}}>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais 
                rápido nas empresas mais desejadas.
              </h1>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} style={{marginLeft:'80px', marginTop:'100px', }}>
              <h1 style={{fontSize:'50px', fontFamily:'Sans-serif'}}>Comece agora grátis</h1>
              <span style={{fontSize:'30px',fontFamily:'Sans-serif'}}>Crie sua conta e make the change._</span>
              <br/>
              {/* <Input/> */}

              <form>
                <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control}/>
                {/* <hr style={{}}/> */}
                {errors.email && <span>E-mail é obrigatório</span>}
                <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control}/>
                {/* <hr style={{}}/> */}
                {errors.senha && <span>Senha é obrigatório</span>}
                <ButtonUsed title="Criar minha conta" variant="secondary" type="submit"/>
              </form>


              <Grid item xs={6} style={{marginTop:'20px', lineHeight:'30px', fontWeight:'200', fontFamily:'Sans-serif'}}>
                <span style={{fontSize:'20px'}}>Ao clicar em &quot;criar minha conta gratis&quot;, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</span>
                <br/>
                <span style={{fontSize:'18px', fontWeight:'bold'}}>
                  Já tenho conta.&nbsp;
                </span>
                <Button style={{fontSize:'18px', fontWeight:'bold', color:'#23DD7A', textTransform:'lowercase', padding:'0rem', background:'transparent',paddingBottom:'0.3rem'}}>
                  Fazer login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      
    </>
  );
}