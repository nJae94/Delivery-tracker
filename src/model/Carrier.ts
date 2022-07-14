export interface Carrier {
  id: string;
  name: string;
  tel?: string;
}

export interface CarrierForm {
  id: number;
  name: string;
}

export interface Track {
  from: {
    name: string;
    time: string;
  };
  to: {
    name: string;
    time: string;
  };
  state: {
    id: string;
    text: string;
  };
  carrier: Carrier;
}
