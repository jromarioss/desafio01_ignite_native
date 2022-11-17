import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { TodoList } from "./components/TodoList";

import { styles } from "./styles";

export interface TodosProps {
  title: string;
  done: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const [todoItem, setTodoItem] = useState<string>('');

  const todoCount = todos.reduce((acc, todo) => {
    if (todo.done) {
      acc.done++;
    }
    acc.total++;
    return acc;
  }, {
    done: 0,
    total: 0,
  })

  function handleAddTodo() {
    const todoAlreadyExists = todos.find(todo => todo.title === todoItem);

    if (todoAlreadyExists) {
      return Alert.alert("Tarefa já existente", "Está tarefa já existe na sua lista.");
    }

    const newTodo: TodosProps = {
      title: todoItem,
      done: false,
    }

    setTodos(prevState => [...prevState, newTodo]);
    setTodoItem('');
  }

  function handleMarkDone(title: string) {
    setTodos(todos.map(todo => {
      if(todo.title === title) {
        todo.done = !todo.done;
      }
      return todo;
    }));
  }

  function handleDeleteTodo(title: string) {
    Alert.alert("Remover tarefa", `Deseja remover a tarefa ${title}`, [
      {
        text: "Sim",
        onPress: () => setTodos(prevState => prevState.filter(todo => todo.title !== title)),
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTodoItem}
          value={todoItem}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleAddTodo}>
          <Text style={styles.inputText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoInfo}>
        <View style={styles.todoText}>
          <Text style={styles.textCreated}>
            Criadas
          </Text>
          <Text style={styles.todoTextNumber}>
            {todoCount.total}
          </Text>
        </View>
        <View style={styles.todoText}>
          <Text style={styles.textDone}>
            Concluídas
          </Text>
          <Text style={styles.todoTextNumber}>
            {todoCount.done}
          </Text>
        </View>
      </View>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onMarkDone={handleMarkDone} />
    </View>
  );
}