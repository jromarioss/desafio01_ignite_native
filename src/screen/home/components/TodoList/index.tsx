import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import { styles } from "./styles";

interface TodoListProps {
  todos: string[];
  onMarkDone: (item: string) => void;
  onDeleteTodo: (item: string) => void;
}

export function TodoList({ todos, onDeleteTodo, onMarkDone }: TodoListProps) {
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={todos}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={styles.list} key={item}>
            <Checkbox
              onValueChange={() => onMarkDone(item)}
              style={styles.checkBox}
            />

              <Text style={styles.ListText}>
                { item }
              </Text>

            {/* {!isChecked ? 
              <Text style={styles.ListText}>
                { item }
              </Text>
              :
              <Text style={styles.ListTextlineThrough}>
                { item }
              </Text>
            } */}
            <TouchableOpacity onPress={() => onDeleteTodo(item)}>
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