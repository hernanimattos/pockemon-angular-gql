import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CardByIdGQL extends Query<any> {
  document = gql`
    query($_id: String) {
      getCardById(_id: $_id) {
        id
        name
        imageUrl
        types
        hp
        attacks {
          cost
          name
          damage
          convertedEnergyCost
        }
        weaknesses {
          type
          value
        }
      }
    }
  `;
}
