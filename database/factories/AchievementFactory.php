<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Platform\Enums\AchievementFlag;
use App\Platform\Enums\AchievementPoints;
use App\Platform\Enums\AchievementType;
use App\Platform\Models\Achievement;
use App\Support\Database\Eloquent\Concerns\FakesUsername;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends Factory<Achievement>
 */
class AchievementFactory extends Factory
{
    use FakesUsername;

    protected $model = Achievement::class;

    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'GameID' => 0,
            'Title' => ucwords(fake()->words(2, true)),
            'Description' => fake()->sentence(),
            'MemAddr' => '0x000000',
            'Author' => $this->fakeUsername(),
            'Flags' => AchievementFlag::Unofficial,
            'Points' => array_rand(array_diff(AchievementPoints::cases(), [0])),
            'BadgeName' => '00001',
            'DateModified' => Carbon::now(),
        ];
    }

    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'Flags' => AchievementFlag::OfficialCore,
        ]);
    }

    public function progression(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => AchievementType::Progression,
        ]);
    }

    public function winCondition(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => AchievementType::WinCondition,
        ]);
    }
}
