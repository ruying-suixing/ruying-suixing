/**
 * Single source of truth for everything the profile generator renders.
 *
 * Edit this file, then run `bun run generate` (or push and let
 * `.github/workflows/profile.yml` regenerate the assets).
 *
 * Colors are not listed here: they stay in `scripts/theme.ts`, which the
 * design rules treat as the only place literal color values may appear.
 */

export interface ProfileConfig {
  /** GitHub login used by the stats, language and repository cards. */
  username: string;
  banner: {
    /** Outlined with Noto Serif SC 700 at build time. */
    displayName: string;
    /** First role line, rendered in the sans stack. */
    roleEn: string;
    /** Second role line, 8px below the first. */
    roleZh: string;
  };
  /** Repository cards, rendered in this order, two per README row. */
  featuredRepos: readonly string[];
  cards: {
    /** Renderer options shared by every card. */
    shared: Readonly<Record<string, string>>;
    /** Statistic card (`api` renderer). */
    stats: Readonly<Record<string, string>>;
    /** Language-ratio card (`topLangs` renderer). */
    topLangs: Readonly<Record<string, string>>;
    /** Repository card (`pin` renderer); `repo` is added per card. */
    repo: Readonly<Record<string, string>>;
  };
  snake: {
    /** Contribution animation geometry. Colors come from `scripts/theme.ts`. */
    draw: {
      sizeCell: number;
      sizeDot: number;
      sizeDotBorderRadius: number;
    };
    animation: {
      frameByStep: number;
      stepDurationMs: number;
    };
  };
}

export const config = {
  username: "ruying-suixing",
  banner: {
    displayName: "Ikaleio",
    roleEn: "Student / Indie Developer / Former OIer",
    roleZh: "学生 / 独立开发者 / 前信息学竞赛生",
  },
  featuredRepos: ["lm-detector", "monoize", "argon-luogu", "ikapb-oss", "transit", "patchright-cli"],
  cards: {
    shared: {
      bg_color: "00000000",
      border_radius: "12",
    },
    stats: {
      show_icons: "true",
      rank_icon: "github",
      custom_title: "GitHub Stats",
      disable_animations: "true",
    },
    topLangs: {
      layout: "compact",
      langs_count: "8",
      custom_title: "Top Languages",
      disable_animations: "true",
    },
    repo: {
      description_lines_count: "2",
    },
  },
  snake: {
    draw: {
      sizeCell: 16,
      sizeDot: 12,
      sizeDotBorderRadius: 2,
    },
    animation: {
      frameByStep: 1,
      stepDurationMs: 100,
    },
  },
} satisfies ProfileConfig;
