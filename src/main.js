import("./style.scss")

import { drawGalleryItem } from "./item";
import items from "./items";

const galleryBox = document.getElementById('gallery');

items.map(i => galleryBox.appendChild(drawGalleryItem(i)));