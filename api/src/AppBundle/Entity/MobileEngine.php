<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MobileEngine
 *
 * @ORM\Table(name="mobile_engine", indexes={@ORM\Index(name="IDX_978CF187727ACA70", columns={"parent_id"})})
 * @ORM\Entity
 */
class MobileEngine
{
    /**
     * @var integer
     *
     * @ORM\Column(name="level", type="integer", nullable=true)
     */
    private $level;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="long_desc", type="string", length=512, nullable=true)
     */
    private $longDesc;

    /**
     * @var integer
     *
     * @ORM\Column(name="selectable", type="integer", nullable=true)
     */
    private $selectable;

    /**
     * @var string
     *
     * @ORM\Column(name="number", type="string", length=10, nullable=true)
     */
    private $number;

    /**
     * @var string
     *
     * @ORM\Column(name="annotation", type="string", length=10, nullable=true)
     */
    private $annotation;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_engine_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\MobileEngine
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\MobileEngine")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     * })
     */
    private $parent;


}

