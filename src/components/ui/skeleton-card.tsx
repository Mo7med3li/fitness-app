import React from "react";
import { Card, CardContent } from "./card";

export default function SkeletonCard() {
  return (
    <Card className="overflow-hidden rounded-2xl animate-pulse">
      <CardContent className="relative aspect-square p-0">
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/30" />
      </CardContent>
    </Card>
  );
}
