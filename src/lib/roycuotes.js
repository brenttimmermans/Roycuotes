import random from 'random-item';
import roycuotes from '../assets/roycuotes.json';

export function getRoycuote() {
  return random(roycuotes);
}
