import React, { useState, useEffect } from 'react';
import { IMG_URL } from '../../constants';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { loading } from '../../redux/todoSlice';

import POKE_IMG from '../../assets/poke.png';

const FetchList = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState('');
  useEffect(() => {
    getPokemos();
  }, []);

  const getPokemos = async () => {
    try {
      dispatch(loading(true));
      const res = await api.GET(api.pokemons);
      if (res) {
        console.log('poke:', res);
        setPokemons(res.results);
        setNext(res.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(loading(false));
    }
  };

  const renderItem = (item) => {
    const path = item.url.split('/');
    const imgID = getPokemonImgId(path[6]);
    return (
      <Card
        p={2}
        sx={{
          display: 'flex',
          height: 100,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#5acdbd', color: 'white' },
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            N° {imgID}
          </Typography>
          <Typography component='div' variant='h5'>
            {item.name}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          sx={{ width: 100 }}
          src={`${IMG_URL}${imgID}.png`}
          alt='Live from space album cover'
        />
      </Card>
    );
  };

  const getPokemonImgId = (id) => {
    console.log('long. ' + id.length);
    switch (id.length) {
      case 1:
        return `00${id}`;
      case 2:
        return `0${id}`;
      default:
        return id;
    }
  };

  const loadMore = async () => {
    try {
      dispatch(loading(true));
      const result = await api.GET(next);
      if (result) {
        console.log('poke: ', result.results);
        setPokemons((prev) => [...prev, ...result.results]);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(loading(false));
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography component='div' variant='h5'>
          Mi Pokedex
        </Typography>
      </Grid>
      {pokemons &&
        pokemons.map((p, index) => {
          return (
            <Grid item xs={4} key={index}>
              {renderItem(p)}
            </Grid>
          );
        })}
      <Grid item xs={4}>
        <Card
          p={2}
          sx={{
            display: 'flex',
            height: 100,
            cursor: 'pointer',
            backgroundColor: '#317b52',
            '&:hover': { backgroundColor: '#5acdbd' },
          }}
          onClick={() => loadMore()}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5' sx={{ color: 'white' }}>
              Cargar Más
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            sx={{ width: 100, p: 2 }}
            image={POKE_IMG}
            alt='Live from space album cover'
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default FetchList;
