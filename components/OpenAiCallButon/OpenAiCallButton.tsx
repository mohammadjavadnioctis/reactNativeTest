import React, {FC, memo} from 'react'
import { View, Text, Pressable } from 'react-native';

const OpenAiCallButton: FC = memo(
    () => {
        async function onSubmit(event: any) {
        // event.preventDefault();
        console.log('clicked')
        try {
          const response = await fetch("https://demo.dornaglobal.com/api/openai", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify('i want you to pretend you are steve jobs'),
          });
    
          const data = await response.json()
          console.log('the response: ', data)
        //   const data = await JSON.stringify(response, null, 4);
          if (response.status !== 200) {
            throw data || new Error(`Request failed with status ${response.status}`);
          }
        //   console.log('this is the result:', data)
          // setResult(data.result);
          // setAnimalInput("");
        } catch(error:any) {
          // Consider implementing your own error handling logic here
          console.error(error);
          alert(`error bro: ${error}`);
        }
      }
      return (
        <View>
            <Pressable onPress={onSubmit} className="border border-orange-400 p-6">
                <Text>
                    
                    OpenAiCallButton
                    </Text>

            </Pressable>

        </View>
      )
    }
)

export default OpenAiCallButton