import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import { styles } from "./styles";
import { TodosProps } from "../..";

interface TodoListProps {
  todos: TodosProps[];
  onMarkDone: (item: string) => void;
  onDeleteTodo: (item: string) => void;
}

export function TodoList({ todos, onDeleteTodo, onMarkDone }: TodoListProps) {
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={todos}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.list} key={item.title}>
            {!item.done ?
              <Checkbox
                onValueChange={() => onMarkDone(item.title)}
                style={styles.checkBox}
              />
              :
              <TouchableOpacity onPress={() => onMarkDone(item.title)}>
                <Image 
                  source={require('../../../../../assets/checked.png')}
                  style={styles.checkBox}
                />
              </TouchableOpacity>
              
            }
           
            {!item.done ? 
              <Text style={styles.ListText}>
                { item.title }
              </Text>
              :
              <Text style={styles.ListTextlineThrough}>
                { item.title }
              </Text>
            }
            
            <TouchableOpacity onPress={() => onDeleteTodo(item.title)}>
              <Image
                source={require('../../../../../assets/trash.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image
              source={require('../../../../../assets/clipboard.png')}
              style={{ width: 56, height: 56, marginBottom: 16}}
            />
            <Text style={styles.emptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}