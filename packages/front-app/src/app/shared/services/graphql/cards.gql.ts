import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CardsGQL extends Query<any> {
  document = gql`
    query {
      getCards {
        id
        name
        imageUrl
        types
      }
    }
  `;
}
