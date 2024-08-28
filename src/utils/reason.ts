import OwnAccountIcon from '../assets/images/icons/reasonIcons/doubleArrow.svg';
import FoodIcon from '../assets/images/icons/reasonIcons/bagHappy.svg';
import RentIcon from '../assets/images/icons/reasonIcons/key.svg';
import CarIcon from '../assets/images/icons/reasonIcons/car.svg';
import DeliveryIcon from '../assets/images/icons/reasonIcons/delivery.svg';
import EducationIcon from '../assets/images/icons/reasonIcons/teacher.svg';
import FamilyIcon from '../assets/images/icons/reasonIcons/people.svg';
import HouseIcon from '../assets/images/icons/reasonIcons/house.svg';
import PetsIcon from '../assets/images/icons/reasonIcons/heart.svg';
import OthersIcon from '../assets/images/icons/reasonIcons/happy.svg';
import LoanIcon from '../assets/images/icons/reasonIcons/coin.svg';
import HealthIcon from '../assets/images/icons/reasonIcons/health.svg';
import ServicesIcon from '../assets/images/icons/reasonIcons/note.svg';
import LeisureTimeIcon from '../assets/images/icons/reasonIcons/drink.svg';
import OutfitIcon from '../assets/images/icons/reasonIcons/clothes.svg';
import TripsIcon from '../assets/images/icons/reasonIcons/suitcase.svg';

export enum ReasonEnum {
  'OWN_ACCOUNT' = 'own_account',
  'FOOD' = 'food',
  'RENT' = 'rent',
  'CAR' = 'car',
  'DELIVERY' = 'delivery',
  'EDUCATION' = 'education',
  'FAMILY' = 'family',
  'HOUSE' = 'house',
  'PETS' = 'pets',
  'OTHERS' = 'others',
  'LOAN' = 'loan',
  'HEALTH' = 'health',
  'SERVICES' = 'services',
  'LEISURE_TIME' = 'leisure_time',
  'OUTFIT' = 'outfit',
  'TRIPS' = 'trips',
}
export const expenseReason = [
  {
    reason: ReasonEnum.OWN_ACCOUNT,
    name: 'Cuenta propia',
    image: OwnAccountIcon,
  },
  {
    reason: ReasonEnum.FOOD,
    name: 'Alimentos',
    image: FoodIcon,
  },
  {
    reason: ReasonEnum.RENT,
    name: 'Alquiler',
    image: RentIcon,
  },
  {
    reason: ReasonEnum.CAR,
    name: 'Automovil',
    image: CarIcon,
  },
  {
    reason: ReasonEnum.DELIVERY,
    name: 'Delivery',
    image: DeliveryIcon,
  },
  {
    reason: ReasonEnum.EDUCATION,
    name: 'Educacion',
    image: EducationIcon,
  },
  {
    reason: ReasonEnum.FAMILY,
    name: 'Familia',
    image: FamilyIcon,
  },
  {
    reason: ReasonEnum.HOUSE,
    name: 'Hogar',
    image: HouseIcon,
  },
  {
    reason: ReasonEnum.PETS,
    name: 'Mascotas',
    image: PetsIcon,
  },
  {
    reason: ReasonEnum.OTHERS,
    name: 'Otros',
    image: OthersIcon,
  },
  {
    reason: ReasonEnum.LOAN,
    name: 'Prestamos',
    image: LoanIcon,
  },
  {
    reason: ReasonEnum.HEALTH,
    name: 'Salud',
    image: HealthIcon,
  },
  {
    reason: ReasonEnum.SERVICES,
    name: 'Servicios',
    image: ServicesIcon,
  },
  {
    reason: ReasonEnum.LEISURE_TIME,
    name: 'Tiempo de ocio',
    image: LeisureTimeIcon,
  },
  {
    reason: ReasonEnum.OUTFIT,
    name: 'Vestimenta',
    image: OutfitIcon,
  },
  {
    reason: ReasonEnum.TRIPS,
    name: 'Viajes',
    image: TripsIcon,
  },
];
