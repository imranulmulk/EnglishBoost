import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navbar from '../components/Navbar/Navbar';
import AllTenses from '../components/contents/Tense/AllTenses';
import Tense from '../components/contents/Tense/Tense';
import AllPos from '../components/contents/POS/AllPos';
import PosDefinition from '../components/contents/POS/PosDefinition';
import AllConversataions from '../components/contents/Conversation/AllConversationScreen/AllConversations';
import ConversationScreen from '../components/contents/Conversation/ConverationDesingModel/ConversationScreen';
import Jokes from '../components/contents/Jokes/Jokes';
import Quotes from '../components/contents/Quotes/Quotes';
import Quiz from '../components/contents/QuizSection/Quiz';
import Quiz_Questions from '../components/contents/QuizSection/Quiz_Questions';
import ReadyQuiz from '../components/contents/QuizSection/ReadyQuiz';
import Result from '../components/contents/QuizSection/Result';
import VocabularyScreen from '../components/contents/Vocabulary/VocabularyScreen';
import VocabularyCategories from '../components/contents/Vocabulary/VocabularyCategories';
import HomeScreen from '../screens/HomeScreen';
import WordOfTheDay from '../components/contents/WordOfTheDay/WordOfTheDay';
import Videos from '../components/contents/AllVideos/Videos';
import AllVideos from '../components/contents/AllVideos/AllVideos';
import AllEngMovies from '../components/contents/AllVideos/AllEngMovies';
import AllEngCartoons from '../components/contents/AllVideos/AllEngCartoons';
import AllNativeEnglish from '../components/contents/AllVideos/AllNativeEnglish';
import AllEngGrammar from '../components/contents/AllVideos/AllEngGrammar';
import AllEngIdioms from '../components/contents/AllVideos/AllEngIdioms';
import Voices from '../components/contents/Voices/Voices';
import Dictionary from '../components/contents/Dictionary/Dictionary';
import Stories from '../components/contents/Pdfs/Stories/Stories';
import ViewStory from '../components/contents/Pdfs/Stories/ViewStory';
import Books from '../components/contents/Pdfs/Books/Books';
import ViewBook from '../components/contents/Pdfs/Books/ViewBook';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#0079FF'},
          headerShadowVisible: false,
          headerTintColor: '#fff',
          // headerShown: false,
        }}
        initialRouteName="Home">
        {/* All Navigations */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="AllTenses" component={AllTenses} />
        <Stack.Screen name="Tense" component={Tense} />
        <Stack.Screen name="AllPos" component={AllPos} />
        <Stack.Screen name="PosDefinition" component={PosDefinition} />
        <Stack.Screen name="AllConversations" component={AllConversataions} />
        <Stack.Screen
          name="ConversationScreen"
          component={ConversationScreen}
        />
        <Stack.Screen name="Jokes" component={Jokes} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Quiz_Questions" component={Quiz_Questions} />
        <Stack.Screen name="ReadyQuiz" component={ReadyQuiz} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="VocabularyScreen" component={VocabularyScreen} />
        <Stack.Screen
          name="VocabularyCategories"
          component={VocabularyCategories}
        />
        <Stack.Screen name="WordOfTheDay" component={WordOfTheDay} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="AllVideos" component={AllVideos} />
        <Stack.Screen name="AllEngMovies" component={AllEngMovies} />
        <Stack.Screen name="AllEngCartoons" component={AllEngCartoons} />
        <Stack.Screen name="AllNativeEnglish" component={AllNativeEnglish} />
        <Stack.Screen name="AllEngGrammar" component={AllEngGrammar} />
        <Stack.Screen name="AllEngIdioms" component={AllEngIdioms} />
        <Stack.Screen name="Voices" component={Voices} />
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen name="Stories" component={Stories} />
        <Stack.Screen name="ViewStory" component={ViewStory} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="ViewBook" component={ViewBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
