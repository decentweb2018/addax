import type { TimeOfDay } from "@/App";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  timeOfDay: TimeOfDay;
  showTent: boolean;
  showAwning: boolean;
  onChangeTimeOfDay: (value: TimeOfDay) => void;
  onChangeShowTent: (value: boolean) => void;
  onChangeShowAwning: (value: boolean) => void;
}

export const Menu = ({
  timeOfDay,
  showTent,
  showAwning,
  onChangeTimeOfDay,
  onChangeShowTent,
  onChangeShowAwning,
}: Props) => {
  return (
    <div className="absolute z-10 m-4 rounded-md bg-white/80 backdrop-blur px-3 py-2 space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <Switch
          id="daynight"
          checked={timeOfDay === "night"}
          onCheckedChange={(value) =>
            onChangeTimeOfDay(value ? "night" : "day")
          }
        />
        <Label htmlFor="daynight">Ночь</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="tent"
          checked={showTent}
          onCheckedChange={onChangeShowTent}
        />
        <Label htmlFor="tent">Rooftop Tent</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="awning"
          checked={showAwning}
          onCheckedChange={onChangeShowAwning}
        />
        <Label htmlFor="awning">Rooftop Awning</Label>
      </div>
    </div>
  );
};
