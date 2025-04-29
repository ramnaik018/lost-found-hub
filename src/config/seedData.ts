import {lostItemsService} from './../services/lostItems'
import {foundItemsService} from './../services/foundItems'


// Populate the database with dummy data
export const seedDatabase = (): void => {
  lostItemsService.createLostItem({
    'name':'iPhone 13 Pro',
    'description':'Black iPhone 13 Pro with a blue case. Lost during a concert at Central Park.',
    'location':'Central Park, New York',
    'date':'2023-05-15',
    'contactInfo':'john.doe@example.com',
    'imageUrl':'https://example.com/images/iphone.jpg'}
  )
  
  lostItemsService.createLostItem({
    'name': 'MacBook Air M2',
    'description': 'Silver MacBook Air M2 lost in the airport lounge.',
    'location': 'JFK Airport, New York',
    'date': '2023-05-22',
    'contactInfo': 'alice.smith@example.com',
    'imageUrl': 'https://example.com/images/macbook.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Ray-Ban Sunglasses',
    'description': 'Black Ray-Ban sunglasses dropped near the beach.',
    'location': 'Santa Monica Beach, California',
    'date': '2023-06-10',
    'contactInfo': 'bob.johnson@example.com',
    'imageUrl': 'https://example.com/images/sunglasses.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Leather Wallet',
    'description': 'Brown leather wallet lost near the coffee shop.',
    'location': 'Downtown Seattle, Washington',
    'date': '2023-07-04',
    'contactInfo': 'carla.williams@example.com',
    'imageUrl': 'https://example.com/images/wallet.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Canon EOS R Camera',
    'description': 'Lost black Canon DSLR camera during a hike.',
    'location': 'Yosemite National Park, California',
    'date': '2023-08-17',
    'contactInfo': 'david.brown@example.com',
    'imageUrl': 'https://example.com/images/camera.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Apple Watch Series 8',
    'description': 'Blue strap Apple Watch, slipped off while jogging.',
    'location': 'Hyde Park, London',
    'date': '2023-09-12',
    'contactInfo': 'emily.davis@example.com',
    'imageUrl': 'https://example.com/images/applewatch.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Sony WH-1000XM5 Headphones',
    'description': 'Black noise-cancelling headphones left in taxi.',
    'location': 'Times Square, New York',
    'date': '2023-10-05',
    'contactInfo': 'frank.miller@example.com',
    'imageUrl': 'https://example.com/images/headphones.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Kindle Paperwhite',
    'description': 'E-reader left in coffee shop.',
    'location': 'Starbucks, Chicago Downtown',
    'date': '2023-11-01',
    'contactInfo': 'grace.wilson@example.com',
    'imageUrl': 'https://example.com/images/kindle.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Coach Handbag',
    'description': 'Brown handbag left on subway.',
    'location': 'Central Subway Station, Boston',
    'date': '2023-11-20',
    'contactInfo': 'harry.moore@example.com',
    'imageUrl': 'https://example.com/images/handbag.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Samsung Galaxy S22',
    'description': 'Lost phone during marathon event.',
    'location': 'San Francisco Golden Gate Park',
    'date': '2023-12-15',
    'contactInfo': 'irene.taylor@example.com',
    'imageUrl': 'https://example.com/images/galaxy.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Beats Studio Buds',
    'description': 'Lost wireless earbuds near shopping mall.',
    'location': 'Mall of America, Minnesota',
    'date': '2024-01-02',
    'contactInfo': 'jack.anderson@example.com',
    'imageUrl': 'https://example.com/images/beats.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Nikon Binoculars',
    'description': 'Lost black binoculars during birdwatching.',
    'location': 'Everglades National Park, Florida',
    'date': '2024-02-07',
    'contactInfo': 'kate.thomas@example.com',
    'imageUrl': 'https://example.com/images/binoculars.jpg'
  });
  
  lostItemsService.createLostItem({
    'name': 'Burberry Scarf',
    'description': 'Checkered wool scarf lost after dinner.',
    'location': 'Fifth Avenue, New York',
    'date': '2024-02-28',
    'contactInfo': 'leo.jackson@example.com',
    'imageUrl': 'https://example.com/images/scarf.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Microsoft Surface Pro',
    'description': 'Tablet lost in conference center.',
    'location': 'Las Vegas Convention Center',
    'date': '2024-03-15',
    'contactInfo': 'mia.white@example.com',
    'imageUrl': 'https://example.com/images/surfacepro.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Fossil Watch',
    'description': 'Brown leather strap watch missing after gym.',
    'location': 'Equinox Gym, New York',
    'date': '2024-04-01',
    'contactInfo': 'nathan.harris@example.com',
    'imageUrl': 'https://example.com/images/fossilwatch.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Bose SoundLink Speaker',
    'description': 'Portable speaker lost after party.',
    'location': 'Venice Beach, California',
    'date': '2024-04-16',
    'contactInfo': 'olivia.martin@example.com',
    'imageUrl': 'https://example.com/images/bosespeaker.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Dell XPS 13 Laptop',
    'description': 'Silver laptop left in taxi.',
    'location': 'Chicago O\'Hare Airport',
    'date': '2024-04-22',
    'contactInfo': 'paul.clark@example.com',
    'imageUrl': 'https://example.com/images/dellxps.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Patagonia Backpack',
    'description': 'Blue hiking backpack misplaced during trip.',
    'location': 'Grand Canyon National Park',
    'date': '2024-05-08',
    'contactInfo': 'quinn.lewis@example.com',
    'imageUrl': 'https://example.com/images/backpack.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'GoPro Hero 10',
    'description': 'Lost action camera while surfing.',
    'location': 'Bondi Beach, Sydney',
    'date': '2024-05-28',
    'contactInfo': 'rachel.walker@example.com',
    'imageUrl': 'https://example.com/images/gopro.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Blackberry Key2',
    'description': 'Old model phone left in train.',
    'location': 'London Underground',
    'date': '2024-06-12',
    'contactInfo': 'steve.hall@example.com',
    'imageUrl': 'https://example.com/images/blackberry.jpg'
  });
  
  foundItemsService.createFoundItem({
    'name': 'Gucci Sunglasses',
    'description': 'Luxury sunglasses lost during vacation.',
    'location': 'Cancun Beach Resort, Mexico',
    'date': '2024-07-01',
    'contactInfo': 'tina.adams@example.com',
    'imageUrl': 'https://example.com/images/guccisunglasses.jpg'
  });
  
  console.log(`Database seeded`);
}; 