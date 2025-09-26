import type { TimeOfDay } from "@/App";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  timeOfDay: TimeOfDay;
  onChangeTimeOfDay: (value: TimeOfDay) => void;
}

export const Menu = ({ timeOfDay, onChangeTimeOfDay }: Props) => {
  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-md bg-white/80 backdrop-blur px-3 py-2 space-y-2 text-sm shadow-lg border border-gray-200">
      <div className="flex items-center gap-2">
        <Switch
          id="daynight"
          checked={timeOfDay === "night"}
          onCheckedChange={(value) =>
            onChangeTimeOfDay(value ? "night" : "day")
          }
        />
        <Label htmlFor="daynight" className="text-gray-700 font-medium">
          {timeOfDay === "day" ? "Day" : "Night"}
        </Label>
      </div>
    </div>
  );
};
