/* eslint-disable import/prefer-default-export */
export const initiativeFormula = (combatant) => {
  const { actor } = combatant;
  if (!actor) return '1d20';
  const data = actor ? actor.data.data : {};
  const parts = ['1d20', data.attributes.perception.value];
  return parts.join('+');
};
