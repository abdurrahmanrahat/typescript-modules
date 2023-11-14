{
  // Generic with Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "rahat",
    computer: {
      brand: "asus",
      model: "c-5",
      releaseYear: 2006,
    },
    smartWatch: {
      brand: "hp",
      model: "kw-66",
      display: "OLET",
    },
  };

  // declare type for generic value of Developer's smartWatch
  type AppleWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  interface YaahamaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YaahamaBike> = {
    name: "priya",
    computer: {
      brand: "asus",
      model: "c-5",
      releaseYear: 2006,
    },
    smartWatch: {
      brand: "apple",
      model: "kw-66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "somethin",
      engineCapacity: "100cc",
    },
  };
  //
}
