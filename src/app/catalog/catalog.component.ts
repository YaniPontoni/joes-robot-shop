<<<<<<< Updated upstream
import { Component, inject } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> Stashed changes
import { IProduct } from './product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
=======
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: IProduct[];
>>>>>>> Stashed changes
  filter: string = '';

  constructor(private cartSvc: CartService) {
    this.products = [
      {
        id: 1,
        description:
<<<<<<< Updated upstream
          'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
        name: 'Large Cyclops',
        imageName: 'head-big-eye.png',
        category: 'Heads',
=======
          "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
        name: "Large Cyclops",
        imageName: "head-big-eye.png",
        category: "Heads",
>>>>>>> Stashed changes
        price: 1220.5,
        discount: 0.2,
      },
      {
        id: 17,
<<<<<<< Updated upstream
        description: 'A spring base - great for reaching high places.',
        name: 'Spring Base',
        imageName: 'base-spring.png',
        category: 'Bases',
=======
        description: "A spring base - great for reaching high places.",
        name: "Spring Base",
        imageName: "base-spring.png",
        category: "Bases",
>>>>>>> Stashed changes
        price: 1190.5,
        discount: 0,
      },
      {
        id: 6,
        description:
<<<<<<< Updated upstream
          'An articulated arm with a claw -- great for reaching around corners or working in tight spaces.',
        name: 'Articulated Arm',
        imageName: 'arm-articulated-claw.png',
        category: 'Arms',
=======
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        name: "Articulated Arm",
        imageName: "arm-articulated-claw.png",
        category: "Arms",
>>>>>>> Stashed changes
        price: 275,
        discount: 0,
      },
      {
        id: 2,
        description:
<<<<<<< Updated upstream
          'A friendly robot head with two eyes and a smile -- great for domestic use.',
        name: 'Friendly Bot',
        imageName: 'head-friendly.png',
        category: 'Heads',
=======
          "A friendly robot head with two eyes and a smile -- great for domestic use.",
        name: "Friendly Bot",
        imageName: "head-friendly.png",
        category: "Heads",
>>>>>>> Stashed changes
        price: 945.0,
        discount: 0.2,
      },
      {
        id: 3,
        description:
<<<<<<< Updated upstream
          'A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.',
        name: 'Shredder',
        imageName: 'head-shredder.png',
        category: 'Heads',
=======
          "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
        name: "Shredder",
        imageName: "head-shredder.png",
        category: "Heads",
>>>>>>> Stashed changes
        price: 1275.5,
        discount: 0,
      },
      {
        id: 16,
        description:
<<<<<<< Updated upstream
          'A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.',
        name: 'Single Wheeled Base',
        imageName: 'base-single-wheel.png',
        category: 'Bases',
=======
          "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
        name: "Single Wheeled Base",
        imageName: "base-single-wheel.png",
        category: "Bases",
>>>>>>> Stashed changes
        price: 1190.5,
        discount: 0.1,
      },
      {
        id: 13,
<<<<<<< Updated upstream
        description: 'A simple torso with a pouch for carrying items.',
        name: 'Pouch Torso',
        imageName: 'torso-pouch.png',
        category: 'Torsos',
=======
        description: "A simple torso with a pouch for carrying items.",
        name: "Pouch Torso",
        imageName: "torso-pouch.png",
        category: "Torsos",
>>>>>>> Stashed changes
        price: 785,
        discount: 0,
      },
      {
        id: 7,
        description:
<<<<<<< Updated upstream
          'An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.',
        name: 'Two Clawed Arm',
        imageName: 'arm-dual-claw.png',
        category: 'Arms',
        price: 285,
        discount: 0,
      },

      {
        id: 4,
        description: 'A simple single-eyed head -- simple and inexpensive.',
        name: 'Small Cyclops',
        imageName: 'head-single-eye.png',
        category: 'Heads',
=======
          "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
        name: "Two Clawed Arm",
        imageName: "arm-dual-claw.png",
        category: "Arms",
        price: 285,
        discount: 0,
      },
    
      {
        id: 4,
        description: "A simple single-eyed head -- simple and inexpensive.",
        name: "Small Cyclops",
        imageName: "head-single-eye.png",
        category: "Heads",
>>>>>>> Stashed changes
        price: 750.0,
        discount: 0,
      },
      {
        id: 9,
        description:
<<<<<<< Updated upstream
          'An arm with a propeller -- good for propulsion or as a cooling fan.',
        name: 'Propeller Arm',
        imageName: 'arm-propeller.png',
        category: 'Arms',
=======
          "An arm with a propeller -- good for propulsion or as a cooling fan.",
        name: "Propeller Arm",
        imageName: "arm-propeller.png",
        category: "Arms",
>>>>>>> Stashed changes
        price: 230,
        discount: 0.1,
      },
      {
        id: 15,
<<<<<<< Updated upstream
        description: 'A rocket base capable of high speed, controlled flight.',
        name: 'Rocket Base',
        imageName: 'base-rocket.png',
        category: 'Bases',
=======
        description: "A rocket base capable of high speed, controlled flight.",
        name: "Rocket Base",
        imageName: "base-rocket.png",
        category: "Bases",
>>>>>>> Stashed changes
        price: 1520.5,
        discount: 0,
      },
      {
        id: 10,
<<<<<<< Updated upstream
        description: 'A short and stubby arm with a claw -- simple, but cheap.',
        name: 'Stubby Claw Arm',
        imageName: 'arm-stubby-claw.png',
        category: 'Arms',
=======
        description: "A short and stubby arm with a claw -- simple, but cheap.",
        name: "Stubby Claw Arm",
        imageName: "arm-stubby-claw.png",
        category: "Arms",
>>>>>>> Stashed changes
        price: 125,
        discount: 0,
      },
      {
        id: 11,
        description:
<<<<<<< Updated upstream
          'A torso that can bend slightly at the waist and equiped with a heat guage.',
        name: 'Flexible Gauged Torso',
        imageName: 'torso-flexible-gauged.png',
        category: 'Torsos',
=======
          "A torso that can bend slightly at the waist and equiped with a heat guage.",
        name: "Flexible Gauged Torso",
        imageName: "torso-flexible-gauged.png",
        category: "Torsos",
>>>>>>> Stashed changes
        price: 1575,
        discount: 0,
      },
      {
        id: 14,
<<<<<<< Updated upstream
        description: 'A two wheeled base with an accelerometer for stability.',
        name: 'Double Wheeled Base',
        imageName: 'base-double-wheel.png',
        category: 'Bases',
=======
        description: "A two wheeled base with an accelerometer for stability.",
        name: "Double Wheeled Base",
        imageName: "base-double-wheel.png",
        category: "Bases",
>>>>>>> Stashed changes
        price: 895,
        discount: 0,
      },
      {
        id: 5,
        description:
<<<<<<< Updated upstream
          'A robot head with three oscillating eyes -- excellent for surveillance.',
        name: 'Surveillance',
        imageName: 'head-surveillance.png',
        category: 'Heads',
=======
          "A robot head with three oscillating eyes -- excellent for surveillance.",
        name: "Surveillance",
        imageName: "head-surveillance.png",
        category: "Heads",
>>>>>>> Stashed changes
        price: 1255.5,
        discount: 0,
      },
      {
        id: 8,
<<<<<<< Updated upstream
        description: 'A telescoping arm with a grabber.',
        name: 'Grabber Arm',
        imageName: 'arm-grabber.png',
        category: 'Arms',
=======
        description: "A telescoping arm with a grabber.",
        name: "Grabber Arm",
        imageName: "arm-grabber.png",
        category: "Arms",
>>>>>>> Stashed changes
        price: 205.5,
        discount: 0,
      },
      {
        id: 12,
<<<<<<< Updated upstream
        description: 'A less flexible torso with a battery gauge.',
        name: 'Gauged Torso',
        imageName: 'torso-gauged.png',
        category: 'Torsos',
=======
        description: "A less flexible torso with a battery gauge.",
        name: "Gauged Torso",
        imageName: "torso-gauged.png",
        category: "Torsos",
>>>>>>> Stashed changes
        price: 1385,
        discount: 0,
      },
      {
        id: 18,
        description:
<<<<<<< Updated upstream
          'An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.',
        name: 'Triple Wheeled Base',
        imageName: 'base-triple-wheel.png',
        category: 'Bases',
=======
          "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
        name: "Triple Wheeled Base",
        imageName: "base-triple-wheel.png",
        category: "Bases",
>>>>>>> Stashed changes
        price: 700.5,
        discount: 0,
      },
    ];
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
<<<<<<< Updated upstream
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
=======
      : this.products.filter((product) => product.category === this.filter)
  }

  getDiscountedClasses(product: IProduct) {
    return {strikethrough: product.discount > 0};
>>>>>>> Stashed changes
  }
}
