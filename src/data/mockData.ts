// Mock data for the dashboard

export const revenueData = [
  { month: 'Jan', current: 15000, previous: 12000 },
  { month: 'Feb', current: 18000, previous: 15000 },
  { month: 'Mar', current: 12000, previous: 18000 },
  { month: 'Apr', current: 20000, previous: 16000 },
  { month: 'May', current: 16000, previous: 19000 },
  { month: 'Jun', current: 22000, previous: 17000 },
];

export const projectionsData = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 25 },
  { month: 'Mar', value: 30 },
  { month: 'Apr', value: 35 },
  { month: 'May', value: 18 },
  { month: 'Jun', value: 32 },
];

export const topProducts = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18'
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50'
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36'
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00'
  },
  {
    name: 'Marco Shoes',
    price: '$79.49',
    quantity: 64,
    amount: '$1,965.81'
  }
];

export const revenueByLocation = [
  { location: 'New York', value: '72K' },
  { location: 'San Francisco', value: '39K' },
  { location: 'Sydney', value: '25K' },
  { location: 'Singapore', value: '61K' }
];

export const totalSalesData = [
  { name: 'Direct', value: 300.56, color: '#3B82F6' },
  { name: 'Affiliate', value: 135.18, color: '#10B981' },
  { name: 'Sponsored', value: 154.02, color: '#F59E0B' },
  { name: 'E-mail', value: 48.96, color: '#EF4444' }
];

export const ordersData = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', avatar: 'NC' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  {
    id: '#CM9802',
    user: { name: 'Kate Morrison', avatar: 'KM' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete'
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', avatar: 'DC' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending'
  },
  {
    id: '#CM9804',
    user: { name: 'Orlando Diggs', avatar: 'OD' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved'
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', avatar: 'AL' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected'
  }
];

export const statsData = {
  customers: {
    value: '3,781',
    change: '+11.01%',
    isPositive: true
  },
  orders: {
    value: '1,219',
    change: '-0.03%',
    isPositive: false
  },
  revenue: {
    value: '$695',
    change: '+15.03%',
    isPositive: true
  },
  growth: {
    value: '30.1%',
    change: '+6.08%',
    isPositive: true
  }
};