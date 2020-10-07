import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class SearchCardGQL extends Query<any> {
  document = gql`
    query($term: String) {
      searchCard(term: $term) {
        id
        name
        imageUrl
        types
      }
    }
  `;
}
