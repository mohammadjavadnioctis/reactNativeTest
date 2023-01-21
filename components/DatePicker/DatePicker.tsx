import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  onDateSelected: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({ onDateSelected }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 20);
  useEffect(() => {
    console.log("modalVisible" ,modalVisible)
  } ,[modalVisible])




  
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Select Date</Text>
      </TouchableOpacity>
      { modalVisible &&
        <View>
          <Text>hi</Text>
          <DateTimePicker
            style={{zIndex: 999}}
            value={date}
            // minimumDate={minDate}
            // maximumDate={maxDate}
            mode="date"
            onChange={(event, selectedDate) => {
              setModalVisible(false);
              setDate(selectedDate || date);
              onDateSelected(selectedDate || date);
            }}
          />
        </View>
      }
    </View>
  );
};

export default DatePicker;
