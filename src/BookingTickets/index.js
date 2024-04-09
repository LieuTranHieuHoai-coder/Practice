import React, { Component } from "react";


export default class BookingTickets extends Component {
  render() {
    return (
      <div>
        <div class="movie-container">
          <label>Pick a movie:</label>
          <select id="movie">
            <option value="10">Avengers: Endgame ($10)</option>
            <option value="12">Joker ($12)</option>
            <option value="8">Toy Story 4 ($8)</option>
            <option value="9">The Lion King ($9)</option>
          </select>
        </div>

        <ul class="showcase">
          <li>
            <div class="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div class="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div class="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>

        <div class="container">
          <div class="screen"></div>

          <div class="row">
            <div class="seat">A1</div>
            <div class="seat">A2</div>
            <div class="seat">A3</div>
            <div class="seat">A4</div>
            <div class="seat">A5</div>
            <div class="seat">A6</div>
            <div class="seat">A7</div>
            <div class="seat">A8</div>
          </div>
          <div class="row">
            <div class="seat">B1</div>
            <div class="seat">B2</div>
            <div class="seat">B3</div>
            <div class="seat occupied">B4</div>
            <div class="seat occupied">B5</div>
            <div class="seat">B6</div>
            <div class="seat">B7</div>
            <div class="seat">B8</div>
          </div>
          <div class="row">
            <div class="seat">C1</div>
            <div class="seat">C2</div>
            <div class="seat">C3</div>
            <div class="seat">C4</div>
            <div class="seat">C5</div>
            <div class="seat">C6</div>
            <div class="seat occupied">C7</div>
            <div class="seat occupied">C8</div>
          </div>
          <div class="row">
            <div class="seat">D1</div>
            <div class="seat">D2</div>
            <div class="seat">D3</div>
            <div class="seat">D4</div>
            <div class="seat">D5</div>
            <div class="seat">D6</div>
            <div class="seat">D7</div>
            <div class="seat">D8</div>
          </div>
          <div class="row">
            <div class="seat">E1</div>
            <div class="seat">E2</div>
            <div class="seat">E3</div>
            <div class="seat occupied">E4</div>
            <div class="seat occupied">E5</div>
            <div class="seat">E6</div>
            <div class="seat">E7</div>
            <div class="seat">E8</div>
          </div>
          <div class="row">
            <div class="seat">F1</div>
            <div class="seat">F2</div>
            <div class="seat">F3</div>
            <div class="seat">F4</div>
            <div class="seat occupied">F5</div>
            <div class="seat occupied">F6</div>
            <div class="seat occupied">F7</div>
            <div class="seat">F8</div>
          </div>
          <div class="row">
            <div class="seat">G1</div>
            <div class="seat">G2</div>
            <div class="seat">G3</div>
            <div class="seat">G4</div>
            <div class="seat">G5</div>
            <div class="seat">G6</div>
            <div class="seat">G7</div>
            <div class="seat">G8</div>
          </div>
          <div class="row">
            <div class="seat">H1</div>
            <div class="seat">H2</div>
            <div class="seat">H3</div>
            <div class="seat">H4</div>
            <div class="seat">H5</div>
            <div class="seat">H6</div>
            <div class="seat">H7</div>
            <div class="seat">H8</div>
          </div>
        </div>

        <p class="text">
          You have selected <span id="count">0</span> seats for a price of $
          <span id="total">0</span>
        </p>
      </div>
    );
  }
}
