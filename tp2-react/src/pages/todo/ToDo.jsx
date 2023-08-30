import React, { useState, useEffect } from 'react';
import HeaderNav from '../../components/HeaderNav';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, changeStatus, deleteTodo } from '../../redux/todoSlice';

import {
  Card,
  Typography,
  Button,
  CardHeader,
  CardContent,
  Stack,
  Grid,
  TextField,
  Checkbox,
} from '@mui/material';

const ToDo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => dispatch(addTodo(data)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  const todo = useSelector((state) => state.todo);
  console.log(todo.todo);

  const [text, setText] = useState(null);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    const newTodo = {
      userId: 1,
      id: todo.todo.length + 1,
      title: text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };
  const handleChecked = (e, id) => {
    dispatch(changeStatus({ id, status: e.target.checked }));
  };

  const delTask = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <HeaderNav />
      <Card title='Agrega una tarea'>
        <CardContent>
          <Stack
            sx={{ justifyContent: 'space-around', gap: 2 }}
            direction='row'
          >
            <Grid item md={8}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Ingresa una tarea'
                  variant='outlined'
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button variant='contained' onClick={() => addTask()}>
              Agregar tarea
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title='Tareas' />
        <CardContent>
          {todo.todo.map((item, index) => {
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
                <Grid item md={6}>
                  <Checkbox
                    checked={item.completed}
                    onChange={(e) => handleChecked(e, item.id)}
                  />
                </Grid>
                <Grid item md={6}>
                  <Button variant='contained' onClick={() => delTask(item.id)}>
                    Borrar
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};
export default ToDo;
