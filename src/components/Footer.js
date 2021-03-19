import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return <footer class="bg-light text-center text-lg-start">

  <div class="container p-4">

    <div class="row">

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">First time React</h5>


        <p>
          Normalement il y a le nom du client ici
        </p>
        <p>
          C'est une belle balise footer non?
        </p>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Réseaux sociaux</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark">Facebook</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Twitter</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Linkdin</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Instagram</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
      </div>

    </div>

  </div>

  <div class="text-center p-3">
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>


    }
}
