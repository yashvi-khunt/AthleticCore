// src/lib/section-utils.ts
/**
 * Utility functions for managing and manipulating sections
 */

import type { SectionConfig, SectionType } from "@/types/content";

/**
 * Validates section configuration
 */
export function validateSection(section: SectionConfig): boolean {
  if (!section.id || !section.type) {
    console.error("Section must have id and type", section);
    return false;
  }
  
  if (typeof section.enabled !== "boolean") {
    console.error("Section enabled must be a boolean", section);
    return false;
  }
  
  if (typeof section.order !== "number") {
    console.error("Section order must be a number", section);
    return false;
  }
  
  return true;
}

/**
 * Sorts sections by order
 */
export function sortSectionsByOrder(sections: SectionConfig[]): SectionConfig[] {
  return [...sections].sort((a, b) => a.order - b.order);
}

/**
 * Filters enabled sections
 */
export function filterEnabledSections(sections: SectionConfig[]): SectionConfig[] {
  return sections.filter((section) => section.enabled);
}

/**
 * Gets sections by type
 */
export function getSectionsByType(
  sections: SectionConfig[],
  type: SectionType
): SectionConfig[] {
  return sections.filter((section) => section.type === type);
}

/**
 * Finds section by ID
 */
export function findSectionById(
  sections: SectionConfig[],
  id: string
): SectionConfig | undefined {
  return sections.find((section) => section.id === id);
}

/**
 * Reorders sections programmatically
 */
export function reorderSections(
  sections: SectionConfig[],
  fromId: string,
  toOrder: number
): SectionConfig[] {
  const newSections = [...sections];
  const sectionIndex = newSections.findIndex((s) => s.id === fromId);
  
  if (sectionIndex === -1) {
    console.error(`Section with id ${fromId} not found`);
    return sections;
  }
  
  const section = newSections[sectionIndex];
  const oldOrder = section.order;
  
  // Update the moved section
  section.order = toOrder;
  
  // Adjust other sections
  newSections.forEach((s) => {
    if (s.id === fromId) return;
    
    if (oldOrder < toOrder) {
      // Moving down: shift sections up
      if (s.order > oldOrder && s.order <= toOrder) {
        s.order--;
      }
    } else {
      // Moving up: shift sections down
      if (s.order >= toOrder && s.order < oldOrder) {
        s.order++;
      }
    }
  });
  
  return sortSectionsByOrder(newSections);
}

/**
 * Gets the next available order number
 */
export function getNextOrder(sections: SectionConfig[]): number {
  if (sections.length === 0) return 1;
  const maxOrder = Math.max(...sections.map((s) => s.order));
  return maxOrder + 1;
}

/**
 * Creates a new section configuration
 */
export function createSection(
  type: SectionType,
  id?: string,
  order?: number
): SectionConfig {
  return {
    id: id || `${type}-section-${Date.now()}`,
    type,
    enabled: true,
    order: order || 1,
  };
}

/**
 * Toggles section enabled state
 */
export function toggleSection(
  sections: SectionConfig[],
  id: string
): SectionConfig[] {
  return sections.map((section) =>
    section.id === id
      ? { ...section, enabled: !section.enabled }
      : section
  );
}

/**
 * Gets section statistics
 */
export function getSectionStats(sections: SectionConfig[]) {
  return {
    total: sections.length,
    enabled: sections.filter((s) => s.enabled).length,
    disabled: sections.filter((s) => !s.enabled).length,
    types: [...new Set(sections.map((s) => s.type))],
  };
}

/**
 * Validates all sections in an array
 */
export function validateAllSections(sections: SectionConfig[]): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  // Check for duplicate IDs
  const ids = sections.map((s) => s.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    errors.push(`Duplicate section IDs found: ${duplicateIds.join(", ")}`);
  }
  
  // Check for duplicate orders in enabled sections
  const enabledSections = filterEnabledSections(sections);
  const orders = enabledSections.map((s) => s.order);
  const duplicateOrders = orders.filter(
    (order, index) => orders.indexOf(order) !== index
  );
  if (duplicateOrders.length > 0) {
    errors.push(`Duplicate order numbers found: ${duplicateOrders.join(", ")}`);
  }
  
  // Validate each section
  sections.forEach((section, index) => {
    if (!validateSection(section)) {
      errors.push(`Section at index ${index} is invalid`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Normalizes section orders to sequential numbers (1, 2, 3, etc.)
 */
export function normalizeSectionOrders(sections: SectionConfig[]): SectionConfig[] {
  const sorted = sortSectionsByOrder(sections);
  return sorted.map((section, index) => ({
    ...section,
    order: index + 1,
  }));
}

/**
 * Gets sections with gaps in order for spacing
 * Useful if you want to leave room for inserting sections
 */
export function createOrderGaps(
  sections: SectionConfig[],
  gap: number = 10
): SectionConfig[] {
  const sorted = sortSectionsByOrder(sections);
  return sorted.map((section, index) => ({
    ...section,
    order: (index + 1) * gap,
  }));
}
