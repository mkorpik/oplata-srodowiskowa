<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CauldronKind
 *
 * @ORM\Table(name="cauldron_kind", indexes={@ORM\Index(name="IDX_4B2DE586727ACA70", columns={"parent_id"})})
 * @ORM\Entity
 */
class CauldronKind
{
    /**
     * @var integer
     *
     * @ORM\Column(name="level", type="integer", nullable=true)
     */
    private $level;

    /**
     * @var integer
     *
     * @ORM\Column(name="selectable", type="integer", nullable=true)
     */
    private $selectable;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="short_desc", type="string", length=255, nullable=true)
     */
    private $shortDesc;

    /**
     * @var integer
     *
     * @ORM\Column(name="mg", type="smallint", nullable=true)
     */
    private $mg;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cauldron_kind_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\CauldronKind
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\CauldronKind")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     * })
     */
    private $parent;


}

