import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import VtmnSkeleton from '../VtmnSkeleton.svelte';

describe('VtmnSkeleton', () => {
  const getSkeleton = (container) =>
    container.getElementsByClassName('vtmn-skeleton')[0];
  const getShape = (container) =>
    container.getElementsByClassName('vtmn-skeleton_line')[0];

  test('Skeleton Should be visible', () => {
    const { container } = render(VtmnSkeleton);
    expect(getSkeleton(container)).toBeVisible();
  });

  test("Should have a class 'line'", () => {
    const { container } = render(VtmnSkeleton);
    expect(getShape(container)).toBeVisible();
  });

  test("Should have the avatar 'vtmn-skeleton_avatar' if shape = 'avatar'", () => {
    const { container } = render(VtmnSkeleton, { shape: 'avatar' });
    expect(getSkeleton(container)).toHaveClass('vtmn-skeleton_avatar');
  });

  test("Should have a width 100% if width = '100'", () => {
    const { container } = render(VtmnSkeleton, { width: '100' });
    expect(getSkeleton(container)).toHaveClass('skeleton-width');
    expect(getSkeleton(container)).toHaveAttribute(
      'style',
      '--skeleton-width:100%',
    );
  });

  test('Should not have a class skeleton-width if width is not defined', () => {
    const { container } = render(VtmnSkeleton);
    expect(getSkeleton(container)).toHaveAttribute(
      'style',
      '--skeleton-width:0%',
    );
    expect(getSkeleton(container)).not.toHaveClass('skeleton-width');
  });

  test("Should have a class 'test' if class = 'test'", () => {
    const { container } = render(VtmnSkeleton, { class: 'test' });
    expect(getSkeleton(container)).toHaveClass('test');
  });
});
