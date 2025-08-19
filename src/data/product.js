export const products = [
    // Audio Devices (7)
    {id: 'p-001', name: 'Wireless Headphones', price: 2999, category: 'Audio Devices', image: 'https://picsum.photos/seed/headphones/400/300', rating: 4.6, stock: 32, description: 'Bluetooth 5.3 headphones with active noise cancellation and long battery life.'},
    {id: 'p-002', name: 'Bluetooth Speaker', price: 2499, category: 'Audio Devices', image: 'https://picsum.photos/seed/speaker/400/300', rating: 4.4, stock: 15, description: 'Portable waterproof speaker delivering powerful sound for outdoor use.'},
    {id: 'p-003', name: 'Noise Cancelling Earbuds', price: 1999, category: 'Audio Devices', image: 'https://picsum.photos/seed/earbuds/400/300', rating: 4.3, stock: 25, description: 'True wireless earbuds featuring deep bass and noise cancellation.'},
    {id: 'p-004', name: 'Home Theater System', price: 7999, category: 'Audio Devices', image: 'https://picsum.photos/seed/hometheater/400/300', rating: 4.7, stock: 10, description: '5.1 channel surround sound system for immersive home cinema experience.'},
    {id: 'p-005', name: 'Soundbar with Subwoofer', price: 4999, category: 'Audio Devices', image: 'https://picsum.photos/seed/soundbar/400/300', rating: 4.5, stock: 12, description: 'Wireless Bluetooth soundbar with deep bass subwoofer for rich audio.'},
    {id: 'p-006', name: 'Turntable Vinyl Player', price: 3499, category: 'Audio Devices', image: 'https://picsum.photos/seed/turntable/400/300', rating: 4.2, stock: 7, description: 'Classic record player with built-in speakers and adjustable speed control.'},
    {id: 'p-007', name: 'Audio Amplifier', price: 2699, category: 'Audio Devices', image: 'https://picsum.photos/seed/amplifier/400/300', rating: 4.1, stock: 5, description: 'Stereo amplifier providing high-fidelity audio and RCA input support.'},
  
    // Mobile Devices (7)
    {id: 'p-008', name: 'Smartphone X100', price: 15999, category: 'Mobile Devices', image: 'https://picsum.photos/seed/smartphone/400/300', rating: 4.8, stock: 35, description: '6.5 inch AMOLED display smartphone with fast processor and great camera.'},
    {id: 'p-009', name: 'Budget Smartphone B50', price: 6999, category: 'Mobile Devices', image: 'https://picsum.photos/seed/budgetphone/400/300', rating: 4.0, stock: 50, description: 'Compact phone featuring 4000mAh battery for all-day usage.'},
    {id: 'p-010', name: 'Smartphone Charger', price: 799, category: 'Mobile Devices', image: 'https://picsum.photos/seed/charger/400/300', rating: 4.2, stock: 70, description: 'Fast charging USB-C charger compatible with most smartphones.'},
    {id: 'p-011', name: 'Wireless Charging Pad', price: 1299, category: 'Mobile Devices', image: 'https://picsum.photos/seed/wirelesscharger/400/300', rating: 4.5, stock: 25, description: 'Qi-enabled wireless charging pad designed for convenience.'},
    {id: 'p-012', name: 'Phone Case', price: 499, category: 'Mobile Devices', image: 'https://picsum.photos/seed/phonecase/400/300', rating: 4.1, stock: 60, description: 'Shockproof silicone case offering great protection and grip.'},
    {id: 'p-013', name: 'Screen Protector', price: 299, category: 'Mobile Devices', image: 'https://picsum.photos/seed/screenprotector/400/300', rating: 4.3, stock: 60, description: 'Tempered glass protector that resists scratches and fingerprints.'},
    {id: 'p-014', name: 'Selfie Stick', price: 599, category: 'Mobile Devices', image: 'https://picsum.photos/seed/selfiestick/400/300', rating: 4.0, stock: 40, description: 'Bluetooth-enabled selfie stick for easy photo capturing.'},
  
    // Computer Accessories (8)
    {id: 'p-015', name: 'Wireless Mouse', price: 999, category: 'Computer Accessories', image: 'https://picsum.photos/seed/mouse/400/300', rating: 4.4, stock: 75, description: 'Ergonomic wireless mouse with 2.4GHz connectivity.'},
    {id: 'p-016', name: 'Mechanical Keyboard', price: 2499, category: 'Computer Accessories', image: 'https://picsum.photos/seed/keyboard/400/300', rating: 4.6, stock: 30, description: 'RGB backlit mechanical keyboard for gaming and typing.'},
    {id: 'p-017', name: 'USB-C Hub', price: 1599, category: 'Computer Accessories', image: 'https://picsum.photos/seed/usbchub/400/300', rating: 4.3, stock: 45, description: 'Multi-port hub for connecting USB-C laptops to various devices.'},
    {id: 'p-018', name: 'External Hard Drive', price: 4999, category: 'Computer Accessories', image: 'https://picsum.photos/seed/harddrive/400/300', rating: 4.5, stock: 20, description: '1TB portable storage with fast data transfer speeds.'},
    {id: 'p-019', name: 'Laptop Cooling Pad', price: 1299, category: 'Computer Accessories', image: 'https://picsum.photos/seed/coolingpad/400/300', rating: 4.2, stock: 35, description: 'USB-powered fan pad to keep laptops cool during use.'},
    {id: 'p-020', name: 'Webcam HD', price: 2199, category: 'Computer Accessories', image: 'https://picsum.photos/seed/webcam/400/300', rating: 4.4, stock: 25, description: '1080p webcam for clear video calls and streaming.'},
    {id: 'p-021', name: 'Gaming Headset', price: 3599, category: 'Computer Accessories', image: 'https://picsum.photos/seed/gamingheadset/400/300', rating: 4.7, stock: 10, description: 'Surround sound headset for immersive gaming experience.'},
    {id: 'p-022', name: 'Monitor Stand', price: 999, category: 'Computer Accessories', image: 'https://picsum.photos/seed/monitorstand/400/300', rating: 4.1, stock: 40, description: 'Adjustable height monitor stand to improve ergonomics.'},
  
    // Home Appliances (7)
    {id: 'p-023', name: 'Smart LED Bulb', price: 799, category: 'Home Appliances', image: 'https://picsum.photos/seed/ledbulb/400/300', rating: 4.3, stock: 45, description: 'WiFi-enabled LED bulb with adjustable brightness and color.'},
    {id: 'p-024', name: 'Air Purifier', price: 4599, category: 'Home Appliances', image: 'https://picsum.photos/seed/airpurifier/400/300', rating: 4.6, stock: 15, description: 'HEPA filter purifier that improves indoor air quality.'},
    {id: 'p-025', name: 'Electric Kettle', price: 1299, category: 'Home Appliances', image: 'https://picsum.photos/seed/kettle/400/300', rating: 4.2, stock: 50, description: 'Cordless 1.7L electric kettle with fast boiling.'},
    {id: 'p-026', name: 'Robot Vacuum Cleaner', price: 7999, category: 'Home Appliances', image: 'https://picsum.photos/seed/robotvacuum/400/300', rating: 4.5, stock: 10, description: 'Smart WiFi-enabled vacuum that cleans automatically.'},
    {id: 'p-027', name: 'Microwave Oven', price: 4599, category: 'Home Appliances', image: 'https://picsum.photos/seed/microwave/400/300', rating: 4.3, stock: 20, description: '20L countertop microwave oven with multiple modes.'},
    {id: 'p-028', name: 'Electric Fan', price: 999, category: 'Home Appliances', image: 'https://picsum.photos/seed/fan/400/300', rating: 4.1, stock: 60, description: '3-speed durable table fan for cooling rooms.'},
    {id: 'p-029', name: 'Refrigerator', price: 21999, category: 'Home Appliances', image: 'https://picsum.photos/seed/fridge/400/300', rating: 4.7, stock: 8, description: 'Double-door fridge with spacious compartments.'},
  
    // Cameras (6)
    {id: 'p-030', name: 'Digital Camera', price: 8999, category: 'Cameras', image: 'https://picsum.photos/seed/digitalcamera/400/300', rating: 4.5, stock: 18, description: '24MP compact digital camera with zoom lens.'},
    {id: 'p-031', name: 'Action Camera', price: 4999, category: 'Cameras', image: 'https://picsum.photos/seed/actioncamera/400/300', rating: 4.3, stock: 22, description: 'Waterproof 4K action camera for adventure filming.'},
    {id: 'p-032', name: 'Camcorder', price: 7299, category: 'Cameras', image: 'https://picsum.photos/seed/camcorder/400/300', rating: 4.2, stock: 14, description: 'Full HD camcorder for high-quality video recording.'},
    {id: 'p-033', name: 'DSLR Camera', price: 27999, category: 'Cameras', image: 'https://picsum.photos/seed/dslrcamera/400/300', rating: 4.8, stock: 7, description: '24MP DSLR camera with lens kit for professionals.'},
    {id: 'p-034', name: 'Camera Tripod', price: 999, category: 'Cameras', image: 'https://picsum.photos/seed/tripod/400/300', rating: 4.1, stock: 35, description: 'Lightweight tripod for stable photography and videography.'},
    {id: 'p-035', name: 'Webcam HD', price: 2199, category: 'Cameras', image: 'https://picsum.photos/seed/webcam/400/300', rating: 4.4, stock: 25, description: '1080p webcam ideal for video conferencing and streaming.'},
  
    // Networking Equipment (7)
    {id: 'p-036', name: 'WiFi Router', price: 3999, category: 'Networking Equipment', image: 'https://picsum.photos/seed/router/400/300', rating: 4.4, stock: 25, description: 'Dual-band gigabit WiFi router for high-speed internet.'},
    {id: 'p-037', name: 'Network Switch', price: 2999, category: 'Networking Equipment', image: 'https://picsum.photos/seed/switch/400/300', rating: 4.2, stock: 20, description: '8-port unmanaged network switch for wired connections.'},
    {id: 'p-038', name: 'Ethernet Cable Cat6', price: 499, category: 'Networking Equipment', image: 'https://picsum.photos/seed/cable/400/300', rating: 4.5, stock: 100, description: '10-meter Cat6 ethernet cable for reliable networking.'},
    {id: 'p-039', name: 'Range Extender', price: 2499, category: 'Networking Equipment', image: 'https://picsum.photos/seed/extender/400/300', rating: 4.1, stock: 30, description: 'WiFi signal booster to extend wireless coverage.'},
    {id: 'p-040', name: 'Modem', price: 2999, category: 'Networking Equipment', image: 'https://picsum.photos/seed/modem/400/300', rating: 4.3, stock: 18, description: 'DSL modem with built-in router functions.'},
    {id: 'p-041', name: 'Network Adapter', price: 1399, category: 'Networking Equipment', image: 'https://picsum.photos/seed/adapter/400/300', rating: 4.0, stock: 22, description: 'USB 3.0 to Ethernet adapter for fast wired connections.'},
    {id: 'p-042', name: 'Access Point', price: 4599, category: 'Networking Equipment', image: 'https://picsum.photos/seed/accesspoint/400/300', rating: 4.3, stock: 15, description: 'Indoor WiFi access point for improved network coverage.'},
  
    // Wearables (6)
    {id: 'p-043', name: 'Smartwatch Basic', price: 5999, category: 'Wearables', image: 'https://picsum.photos/seed/smartwatch/400/300', rating: 4.1, stock: 30, description: 'Fitness tracker with heart rate monitoring and notifications.'},
    {id: 'p-044', name: 'Fitness Band', price: 2999, category: 'Wearables', image: 'https://picsum.photos/seed/fitnessband/400/300', rating: 4.0, stock: 50, description: 'Step counter and sleep monitor with long battery life.'},
    {id: 'p-045', name: 'VR Headset', price: 14999, category: 'Wearables', image: 'https://picsum.photos/seed/vrheadset/400/300', rating: 4.5, stock: 8, description: 'Virtual reality headset for immersive gaming and experiences.'},
    {id: 'p-046', name: 'Smart Glasses', price: 7999, category: 'Wearables', image: 'https://picsum.photos/seed/smartglasses/400/300', rating: 4.2, stock: 10, description: 'Augmented reality glasses with hands-free display.'},
    {id: 'p-047', name: 'Wireless Earbuds', price: 3999, category: 'Wearables', image: 'https://picsum.photos/seed/wirelessearbuds/400/300', rating: 4.3, stock: 40, description: 'Bluetooth earbuds with microphone and touch controls.'},
    {id: 'p-048', name: 'Heart Rate Monitor', price: 1999, category: 'Wearables', image: 'https://picsum.photos/seed/heartratemonitor/400/300', rating: 4.1, stock: 25, description: 'Chest strap heart rate monitor for fitness tracking.'},
  
    // Extras (2)
    {id: 'p-049', name: 'Portable Power Bank', price: 2499, category: 'Mobile Devices', image: 'https://picsum.photos/seed/powerbank/400/300', rating: 4.4, stock: 45, description: '10000mAh USB power bank for charging devices on the go.'},
    {id: 'p-050', name: 'Wireless Keyboard', price: 1999, category: 'Computer Accessories', image: 'https://picsum.photos/seed/wirelesskeyboard/400/300', rating: 4.3, stock: 30, description: 'Compact wireless keyboard with ergonomic design.'}
  ];
  