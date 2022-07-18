export interface Carrier {
  id: string;
  name: string;
  tel?: string;
}

export interface CarrierForm {
  id: number;
  name: string;
}

export interface Progresses {
  description: string;
  location: {
    name: string;
  };
  status: {
    id: string;
    text: string;
  };
  time: string;
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
  progresses: Progresses[];
}
