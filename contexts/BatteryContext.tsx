import React, { createContext, ReactNode, useContext, useState } from 'react';

interface BatteryContextType {
  batteryLevel: number;
  setBatteryLevel: (level: number) => void;
  temperature: number;
  setTemperature: (temp: number) => void;
  isCharging: boolean;
  setIsCharging: (charging: boolean) => void;
  cycles: number;
  health: number;
}

const BatteryContext = createContext<BatteryContextType | undefined>(undefined);

export function BatteryProvider({ children }: { children: ReactNode }) {
  const [batteryLevel, setBatteryLevel] = useState(96);
  const [temperature, setTemperature] = useState(28);
  const [isCharging, setIsCharging] = useState(false);
  const [cycles] = useState(1247);
  const [health] = useState(96);

  return (
    <BatteryContext.Provider
      value={{
        batteryLevel,
        setBatteryLevel,
        temperature,
        setTemperature,
        isCharging,
        setIsCharging,
        cycles,
        health,
      }}
    >
      {children}
    </BatteryContext.Provider>
  );
}

export function useBattery() {
  const context = useContext(BatteryContext);
  if (!context) {
    throw new Error('useBattery must be used within a BatteryProvider');
  }
  return context;
}
