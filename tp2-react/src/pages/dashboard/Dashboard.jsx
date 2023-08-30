import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Card, CardHeader, CardContent } from '@mui/material';

const Dashboard = () => {
  const todo = useSelector((state) => state.todo);

  const todoCompleted = todo.todo.filter((todo) => todo.completed === true);
  const todoUncompleted = todo.todo.filter((todo) => todo.completed === false);

  console.log(todoCompleted);
  console.log(todoUncompleted);

  return (
    <>
      <Card>
        <CardHeader title='Tareas Completadas' />
        <CardContent>
          {todoCompleted.map((item, index) => {
            return (
              <Grid
                container
                spacing={2}
                key={index}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid item md={6}>
                  <Typography>{item.title}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 3 }}>
        <CardHeader title='Tareas Completadas' />
        <CardContent>
          {todoUncompleted.map((item, index) => {
            return (
              <Grid
                container
                spacing={2}
                key={index}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid item md={6}>
                  <Typography>{item.title}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};
export default Dashboard;
