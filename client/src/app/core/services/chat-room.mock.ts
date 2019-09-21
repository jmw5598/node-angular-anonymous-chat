import { ChatMessage } from 'src/app/shared/models/chat-message.model';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

export const CHATROOM_MOCK =  {
  users: [
    new ChatUser(
      '1f3ede73-2414-4c9e-b27c-9a2ff0410d0c',
      'Jason White'
    ),
    new ChatUser(
      '68b52997-1a21-4698-9851-52167d74d9c3',
      'John Doe'
    ),
    new ChatUser(
      'adffdd5b-03e5-4788-b3f9-584ddd289e76',
      'Dillard White'
    ),
    new ChatUser(
      '40a33395-4a74-48c8-bbc7-18437d19a88d',
      'Danielle Gjurovski'
    )
  ],
  messages: [
    new ChatMessage(
      '1', 'This is a test mesage', new Date(),
      new ChatUser(
        '1f3ede73-2414-4c9e-b27c-9a2ff0410d0c',
        'John Doe'
      )
    ),
    new ChatMessage(
      '2', 'This is a test mesage', new Date(),
      new ChatUser(
        '40a33395-4a74-48c8-bbc7-18437d19a88d',
        'Danielle Gjurovski'
      )
    ),
    new ChatMessage(
      '3', 'This is a test mesage', new Date(),
      new ChatUser (
        '1f3ede73-2414-4c9e-b27c-9a2ff0410d0c',
        'John Doe'
      )
    ),
    new ChatMessage(
      '4', 'This is a test mesage', new Date(),
      new ChatUser (
        '68b52997-1a21-4698-9851-52167d74d9c3',
        'Jason White'
      ),
    ),
    new ChatMessage(
      '5', 'This is a test mesage', new Date(),
      new ChatUser(
        '40a33395-4a74-48c8-bbc7-18437d19a88d',
        'Danielle Gjurovski'
      )
    )
  ]
}