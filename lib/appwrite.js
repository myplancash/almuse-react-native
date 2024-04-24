export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.fulfilldev.almuse',
  projectId: '6628320c92d8a9f7b1c9',
  databaseId: '6628560dba60fc47c25e',
  userCollectionId: '662856c616bd95704941',
  videosCollectionId: '662857701676e11bd94f',
  storageId: '662924b61a76c5f21b3c',
}

import { Client, Account, ID } from 'react-native-appwrite';
// Init your react-native SDK 
const client = new Client();

client 
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
// Register User
export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
      .then(function (response) {
          console.log(response);
      }, function (error) {
          console.log(error);
      });
}
