import {FetchGamesAction} from "../types/fetch-games-action.type";
import gameReducer from "./game-reducer";
import {mockGames} from "../mock/mock-games";
import {CacheGamesAction} from "../types/cache-games-action.type";

describe('game reducer', () => {
  it('FetchGamesAction', () => {
    expect(gameReducer(
      undefined,
      {
        type: FetchGamesAction,
        payload: mockGames
      }
    ))
      .toEqual(returnGameStateNotCached());
  })

  it('CacheGamesAction', () => {
    expect(gameReducer(
      returnGameStateNotCached(),
      {
        type: CacheGamesAction,
      }
    ))
      .toEqual({
        data: mockGames,
        pending: false,
        error: null,
        cache: true
      });
  })

  it('action Not exist return the same state', () => {
    expect(gameReducer(
      returnGameStateNotCached(),
      {
        // @ts-ignore
        type: 'Not Exist',
      }
    ))
      .toEqual(returnGameStateNotCached());
  })
});

function returnGameStateNotCached() {
  return {
    data: mockGames,
    pending: false,
    error: null,
    cache: false
  }
}
